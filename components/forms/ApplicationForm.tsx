'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import SmsConsentCheckboxes from '@/components/forms/SmsConsentCheckboxes';
import { applicationSchema, ApplicationFormData } from '@/lib/validations';

/** Re-skin the shared Input/Textarea to the redesign tokens on this route only. */
const fieldSkin = 'rounded-sm bg-surface placeholder:text-ink-3/70';
const labelSkin = 'mb-2 block text-[14px] text-ink';

export default function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
  });

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        console.error('Application API error:', err);
        setSubmitError("Something didn't go through. Try again?");
        return;
      }

      router.push('/thank-you');
    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmitError("Something didn't go through. Try again?");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Full name */}
      <div>
        <label htmlFor="fullName" className={labelSkin}>
          Full name
        </label>
        <Input
          {...register('fullName')}
          type="text"
          id="fullName"
          placeholder="First and last name"
          autoComplete="name"
          error={errors.fullName?.message}
          className={fieldSkin}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelSkin}>
          Email address
        </label>
        <Input
          {...register('email')}
          type="email"
          id="email"
          inputMode="email"
          placeholder="you@example.com"
          autoComplete="email"
          error={errors.email?.message}
          className={fieldSkin}
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className={labelSkin}>
          Phone
        </label>
        <Input
          {...register('phone')}
          type="tel"
          id="phone"
          inputMode="tel"
          placeholder="(555) 123-4567"
          autoComplete="tel"
          error={errors.phone?.message}
          className={fieldSkin}
        />
      </div>

      {/* Current city */}
      <div>
        <label htmlFor="currentCity" className={labelSkin}>
          Current city
        </label>
        <Input
          {...register('currentCity')}
          type="text"
          id="currentCity"
          placeholder="Where you're based"
          autoComplete="address-level2"
          error={errors.currentCity?.message}
          className={fieldSkin}
        />
      </div>

      {/* City you'd drive in */}
      <div>
        <label htmlFor="cityOfInterest" className={labelSkin}>
          City you&rsquo;d drive in
        </label>
        <select
          {...register('cityOfInterest')}
          id="cityOfInterest"
          className="min-h-[48px] w-full touch-manipulation rounded-sm border border-line-2 bg-surface px-4 py-4 text-base text-ink transition-colors focus:border-gulf focus:outline-none sm:py-3"
        >
          <option value="">Select a city</option>
          <option value="Denver">Denver</option>
          <option value="Scottsdale">Scottsdale</option>
          <option value="Miami">Miami</option>
          <option value="Other">Other</option>
        </select>
        {errors.cityOfInterest && (
          <p className="mt-2 text-sm text-papaya">{errors.cityOfInterest.message}</p>
        )}
      </div>

      {/* What you drive */}
      <div>
        <label htmlFor="briefIntro" className={labelSkin}>
          Tell us what you drive
        </label>
        <Textarea
          {...register('briefIntro')}
          id="briefIntro"
          rows={4}
          maxLength={200}
          placeholder="What's in the garage, and does it get out?"
          error={errors.briefIntro?.message}
          className={fieldSkin}
        />
        <p className="mt-2 text-[13px] text-ink-3">
          A sentence is plenty. We care more about the driver than the car.
        </p>
      </div>

      {/* Invite code (optional) */}
      <div>
        <label htmlFor="inviteCode" className={labelSkin}>
          Invite code (optional)
        </label>
        <Input
          {...register('inviteCode')}
          type="text"
          id="inviteCode"
          placeholder="If someone sent you"
          autoComplete="off"
          className={fieldSkin}
        />
      </div>

      {/* Terms consent */}
      <div className="flex items-start gap-3">
        <input
          {...register('agreedToTerms')}
          type="checkbox"
          id="agreedToTerms"
          className="mt-1 h-5 w-5 flex-shrink-0 touch-manipulation rounded-sm border-line-2 bg-surface accent-gulf sm:h-4 sm:w-4"
        />
        <label htmlFor="agreedToTerms" className="text-sm text-ink-2 sm:text-base">
          I agree to the Drive Exotiq{' '}
          <Link href="/terms" className="text-gulf underline hover:text-gulf-2">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="text-gulf underline hover:text-gulf-2">
            Privacy Policy
          </Link>
        </label>
      </div>
      {errors.agreedToTerms && (
        <p className="mt-1 text-sm text-papaya">{errors.agreedToTerms.message}</p>
      )}

      {/* SMS consents (legal copy unchanged) */}
      <SmsConsentCheckboxes register={register} variant="de" />

      {/* Submit — the page's one gulf accent */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending…' : 'Get on the list'}
      </Button>

      {submitError && (
        <p role="alert" className="text-sm text-papaya">
          {submitError}
        </p>
      )}

      <p className="text-[13px] text-ink-3">
        We never sell your info. One list, no noise.
      </p>
    </form>
  );
}
