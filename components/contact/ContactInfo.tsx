export default function ContactInfo() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-950">
        Get in touch
      </h2>

      <p className="mt-4 max-w-lg text-lg leading-8 text-gray-600">
        We&apos;d love to hear about your project, idea, or
        business challenge.
      </p>

      <div className="mt-8 space-y-6">
        <div>
          <p className="text-sm font-semibold text-gray-500">
            Email
          </p>

          <p className="mt-1 text-gray-900">
            hello@listsoftware.com
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-500">
            Phone
          </p>

          <p className="mt-1 text-gray-900">
            +1 123 456 7890
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-500">
            Address
          </p>

          <p className="mt-1 text-gray-900">
            123 Business Street
          </p>
        </div>
      </div>
    </div>
  );
}