export default function PrivacyPage() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">

          <h1 className="text-4xl md:text-5xl font-black text-[#141B24] leading-tight tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#8D9EB2] mb-12">Last Updated: July 27, 2026</p>

          <div className="space-y-10 text-sm text-[#141B24] leading-relaxed">

            {/* Intro */}
            <p>
              Spacelift Studios Inc. (&quot;Spacelift,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) provides an online platform and
              marketplace where individuals (&quot;Homeowners&quot;) can use our AI-enabled tools to help develop renovation
              projects (&quot;Projects&quot;), meet with our in-house experts (&quot;Spacelift Advisors&quot;), and match with external
              professionals (&quot;Spacelift Pros&quot;) to manage design, construction, and other Projects (collectively, the
              &quot;Services&quot;). This Privacy Policy describes our privacy practices, how we handle personal information
              that we collect through and in connection with our website at{' '}
              <a href="https://hellospacelift.com/" className="text-[#3B86E1] hover:underline">
                https://hellospacelift.com/
              </a>
              , our mobile applications, and any other website or service that we own or control and that links to
              this Privacy Policy.
            </p>

            {/* 1. Personal Information We Collect */}
            <section>
              <h2 className="text-xl font-bold text-[#141B24] mb-4">Personal Information We Collect</h2>

              <p className="mb-3">
                <strong>Information you provide to us.</strong> The personal information we collect from you depends on
                whether you are a Homeowner or Spacelift Pro. Personal information you may provide to us through the
                Services or otherwise includes:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'Contact information, such as your first and last name, address, email address, and phone number.',
                  'Professional information, such as your professional experiences, professional affiliations, areas of expertise, licenses and certifications, interests, and information you may choose to provide in your profile.',
                  'User content, such as Project descriptions, scope of work, Project address, photographs, video, and other recorded content that you upload to or submit through the Services, including content provided as inputs to our AI-powered features.',
                  'Location information, such as your approximate geographical location (e.g., city and zip code) and other location information you choose to provide.',
                  'Payment and transaction data that our payment service providers collect to process your payments if you use one of our paid Services. We do not have access to payment card numbers. The information you provide in connection with your payments is handled by our third-party payment processors, in accordance with their terms of service and privacy policies.',
                  'Transaction history, including your payments made and received, invoices, refunds, credits, billing records, and details of the Services purchased or provided.',
                  'Communications that we retain from any support requests you submit, questions you may send us about our Services, your Projects, marketing, etc.',
                  'Marketing data, such as your preferences for receiving our marketing communications, and details about your engagement with those communications.',
                  'Other information that we may collect which is not specifically listed here, but which we will use in accordance with this Privacy Policy or as otherwise disclosed at the time of collection.',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-[#FC4C4C] font-bold shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mb-3">
                <strong>Automatic data collection.</strong> We and our service providers may automatically log and combine
                information about you, your computer or mobile device, and your interactions over time with the Services,
                online resources, and our communications, such as:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex gap-2">
                  <span className="text-[#FC4C4C] font-bold shrink-0">—</span>
                  <span>Device data, including your computer&apos;s or mobile device&apos;s operating system type and version,
                    manufacturer and model, browser type, screen resolution, device type (e.g., phone, tablet), IP address,
                    unique identifiers, language settings, and general location information such as city, state, or
                    geographic area.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FC4C4C] font-bold shrink-0">—</span>
                  <span>Usage data, including pages, screens and/or features you viewed, accessed and/or used, how long
                    you spent on a page, screen and/or feature, the website you visited before browsing to the Services,
                    navigation paths between pages or screens, information about your activity on a page, screen and/or
                    feature, access times, duration of access, and whether you have opened or otherwise engaged with our
                    communications, such as our marketing emails, or clicked links or files within them.</span>
                </li>
              </ul>
              <p className="mb-3">We use the following tools for automatic data collection:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex gap-2">
                  <span className="text-[#FC4C4C] font-bold shrink-0">—</span>
                  <span>Cookies, which are text files that websites store on a visitor&apos;s device to uniquely identify the
                    visitor&apos;s browser or to store information or settings in the browser for the purpose of helping you
                    navigate between pages efficiently, remembering your preferences, enabling functionality, and helping
                    us understand website user activity and patterns.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FC4C4C] font-bold shrink-0">—</span>
                  <span>Local storage technologies, like HTML5, that provide cookie-equivalent functionality but can store
                    larger amounts of data, including on your device outside of your browser in connection with specific
                    applications.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FC4C4C] font-bold shrink-0">—</span>
                  <span>Web beacons, also known as pixel tags or clear GIFs, which are used to demonstrate that a webpage
                    or email was accessed or opened, or that certain content was viewed or clicked.</span>
                </li>
              </ul>

              <p className="mb-3">
                <strong>Third party sources.</strong> In certain cases, we combine personal information we receive from you
                with personal information we obtain from other sources, including:
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-[#FC4C4C] font-bold shrink-0">—</span>
                  <span>Third parties, such as business data providers and public databases. For example, we may obtain
                    information from public records in order to conduct due diligence, verify identity and licensure,
                    perform fraud prevention checks, or to supplement your profile.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FC4C4C] font-bold shrink-0">—</span>
                  <span>Social media platforms. We may receive information about your activity when you follow us on social
                    media and networking platforms such as Facebook or X. Additionally, if you access our Services through
                    a social networking site or a third-party login service (such as Apple or Google), we may collect
                    information about you from that third party that you have made available via your privacy settings.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FC4C4C] font-bold shrink-0">—</span>
                  <span>Third-party integrations. Should you choose to integrate a third-party product within our Services,
                    we will ask you to grant us permission to view and/or download, as applicable. This allows us to
                    configure your integration(s) in accordance with your preferences. We do not use this information for
                    any other purpose.</span>
                </li>
              </ul>
            </section>

            {/* 2. How We Use Personal Information */}
            <section>
              <h2 className="text-xl font-bold text-[#141B24] mb-4">How We Use Personal Information</h2>

              <p className="mb-3">
                <strong>Provide our Services.</strong> We use your personal information to:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'Enable our Homeowners and Spacelift Pros to engage with each other;',
                  'Provide tailored advisory services to our users through our Spacelift Advisors;',
                  'Personalize your experiences within the Services;',
                  'Communicate with users about our Services and your account, including by sending announcements, updates, security alerts, and support and administrative messages;',
                  'Provide support, and respond to requests, questions, and feedback; and',
                  'Provide marketing and advertising, including interest-based online advertising.',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-[#FC4C4C] font-bold shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mb-6">
                <strong>For research, development, benchmarking, and improving our Services.</strong> We may use personal
                information to analyze and improve the Services, identify trends, and operate and expand our business
                activities. We may also create aggregated, anonymized, or other de-identified statistics, which we may
                use for lawful business purposes, including for analytics, forecasting, and strategic planning.
              </p>

              <p className="mb-3">
                <strong>For marketing and advertising.</strong> We and our advertising partners may collect and use your
                personal information for marketing and advertising purposes, including:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex gap-2">
                  <span className="text-[#FC4C4C] font-bold shrink-0">—</span>
                  <span><strong>Email.</strong> We or our advertising partners may from time-to-time send you direct
                    marketing emails as permitted by law, including, but not limited to, notifying you of special
                    promotions, offers and events via email. You may opt out of our marketing emails as described in the
                    &quot;Opt out of marketing communications&quot; section below.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FC4C4C] font-bold shrink-0">—</span>
                  <span><strong>Interest-based advertising.</strong> We engage our advertising partners, including third
                    party advertising companies and social media companies, to display ads around the web. These companies
                    may use cookies and similar technologies to collect information about your interaction over time across
                    our Services, our communications, and other online services, and use that information to serve online
                    ads that they think will interest you. We may also share information about our users with these
                    companies to facilitate interest-based advertising to those or similar users on other online platforms.
                    You can learn more about your choices for limiting interest-based advertising in the
                    &quot;Opt out of online tracking&quot; section below.</span>
                </li>
              </ul>
              <p className="mb-6">
                Note, text messaging originator opt-in data and consent will not be shared with any third parties for
                marketing and advertising purposes without your explicit consent.
              </p>

              <p>
                <strong>For compliance and protection.</strong> We may use personal information to comply with legal
                obligations, including to enforce any applicable terms and conditions, defend against legal claims or
                disputes, protect the security and integrity of our Services, and identify and investigate fraudulent,
                harmful, unauthorized, unethical or illegal activity.
              </p>
            </section>

            {/* 3. How We Disclose Personal Information */}
            <section>
              <h2 className="text-xl font-bold text-[#141B24] mb-4">How We Disclose Personal Information</h2>
              <p className="mb-4">
                We may disclose personal information to the following individuals or entities and as otherwise described
                in this Privacy Policy or at the time of collection:
              </p>

              <p className="mb-3">
                <strong>Other Users.</strong> We share certain personal information between Homeowners and Spacelift Pros
                in connection with the Services, as described below.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex gap-2">
                  <span className="text-[#FC4C4C] font-bold shrink-0">—</span>
                  <span><strong>For Homeowners:</strong> We share your information with a Spacelift Pro only after you
                    have actively selected that Spacelift Pro through the referral process. Such disclosure is staged as
                    follows: (a) upon your selection of a Spacelift Pro and prior to the Spacelift Pro&apos;s acceptance, the
                    Spacelift Pro will receive only your Project description and scope of work; and (b) upon the Spacelift
                    Pro&apos;s acceptance, we will additionally disclose your Project address, name, phone number,
                    questionnaire responses, and similar Project-related inputs.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FC4C4C] font-bold shrink-0">—</span>
                  <span><strong>For Spacelift Pros:</strong> We will make your profile available to Homeowners seeking to
                    connect with Spacelift Pros for their renovation Projects. This profile will include any information
                    about you (e.g. licensing information from public sources), Homeowner reviews, and information you
                    choose to provide, such as your areas of expertise, licenses, certifications, availability, and other
                    information that may assist a Homeowner in deciding whether to select you for their Project.</span>
                </li>
              </ul>

              <p className="mb-6">
                <strong>Project showcases and marketing.</strong> We may share photographs, testimonials, and other
                content users submit through the Services to showcase Projects and tell users&apos; stories on our websites,
                social media, and other public channels. We may remove or obscure identifying information or seek
                additional permission where appropriate or required by law.
              </p>

              <p className="mb-6">
                <strong>Service providers.</strong> Companies and individuals that provide services on our behalf or help
                us operate the Services or our business (such as hosting, AI, information technology, customer support,
                email delivery, and analytics services).
              </p>

              <p className="mb-6">
                <strong>Professional advisors.</strong> Professional advisors, such as lawyers, auditors, bankers, and
                insurers, where necessary in the course of the professional services that they render to us.
              </p>

              <p className="mb-6">
                <strong>Authorities and others.</strong> Law enforcement, government authorities, and private parties, as
                we believe in good faith to be necessary or appropriate for the compliance and protection purposes
                described above.
              </p>

              <p>
                <strong>Business transferees.</strong> Acquirers and other relevant participants in business transactions
                (or negotiations for such transactions) involving a corporate divestiture, merger, consolidation,
                acquisition, reorganization, sale or other disposition of all or any portion of the business or assets
                of, or equity interests in, our business (including, in connection with a bankruptcy or similar
                proceedings).
              </p>
            </section>

            {/* 4. Privacy Choices */}
            <section>
              <h2 className="text-xl font-bold text-[#141B24] mb-4">Privacy Choices</h2>

              <p className="mb-6">
                <strong>Access to account information.</strong> You may update, correct, or delete your account
                information by accessing the account you have established with us on the Services. For Spacelift Pros
                whose accounts are managed by another user, such as an admin, certain choices must be initiated by the
                admin, like account deletion.
              </p>

              <p className="mb-6">
                <strong>Opt out of marketing communications.</strong> You can opt out of marketing-related emails by
                following the opt-out or unsubscribe instructions at the bottom of the emails you receive from us. If
                you do so, you will continue to receive service-related and other non-marketing emails. Please note that
                Spacelift is not responsible for other users&apos; communications sent to you outside the Services.
              </p>

              <p className="mb-3">
                <strong>Opt out of online tracking.</strong> There are a number of ways to opt out of having your online
                activity and device data collected through our Services, which we have summarized below:
              </p>
              <ul className="space-y-3 mb-4">
                <li className="flex gap-2">
                  <span className="text-[#FC4C4C] font-bold shrink-0">—</span>
                  <span>
                    <strong>Blocking cookies in your browser.</strong> Most browsers let you remove or reject cookies,
                    including cookies used for interest-based advertising. To do this, follow the instructions in your
                    browser settings. Many browsers accept cookies by default until you change your settings. For more
                    information about cookies, including how to see what cookies have been set on your device and how to
                    manage and delete them, visit{' '}
                    <a href="http://www.allaboutcookies.org" className="text-[#3B86E1] hover:underline" target="_blank" rel="noopener noreferrer">
                      www.allaboutcookies.org
                    </a>.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FC4C4C] font-bold shrink-0">—</span>
                  <span>
                    <strong>Blocking advertising ID use in your mobile settings.</strong> Your mobile device settings may
                    provide functionality to limit use of the advertising ID associated with your mobile device for
                    interest-based advertising purposes.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FC4C4C] font-bold shrink-0">—</span>
                  <span>
                    <strong>Using privacy plug-ins or browsers.</strong> You can block our Services from setting cookies
                    by using a browser with privacy features, like{' '}
                    <a href="https://brave.com/" className="text-[#3B86E1] hover:underline" target="_blank" rel="noopener noreferrer">Brave</a>,
                    or installing browser plugins like{' '}
                    <a href="https://privacybadger.org/" className="text-[#3B86E1] hover:underline" target="_blank" rel="noopener noreferrer">Privacy Badger</a>,{' '}
                    <a href="https://duckduckgo.com/" className="text-[#3B86E1] hover:underline" target="_blank" rel="noopener noreferrer">DuckDuckGo</a>,{' '}
                    <a href="https://www.ghostery.com/" className="text-[#3B86E1] hover:underline" target="_blank" rel="noopener noreferrer">Ghostery</a> or{' '}
                    <a href="https://ublock.org/en" className="text-[#3B86E1] hover:underline" target="_blank" rel="noopener noreferrer">uBlock Origin</a>,
                    and configuring them to block cookies/trackers.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FC4C4C] font-bold shrink-0">—</span>
                  <span>
                    <strong>Google Analytics.</strong> We use Google Analytics to help us better understand how people
                    engage with our Services by collecting information and creating reports about how users use our
                    Services. For more information on Google Analytics, click{' '}
                    <a href="https://marketingplatform.google.com/about/analytics/" className="text-[#3B86E1] hover:underline" target="_blank" rel="noopener noreferrer">here</a>.
                    {' '}For more information about Google&apos;s privacy practices, click{' '}
                    <a href="https://www.google.com/policies/privacy/partners/" className="text-[#3B86E1] hover:underline" target="_blank" rel="noopener noreferrer">here</a>.
                    {' '}You can opt out of Google Analytics by downloading and installing the browser plug-in available at:{' '}
                    <a href="https://tools.google.com/dlpage/gaoptout" className="text-[#3B86E1] hover:underline" target="_blank" rel="noopener noreferrer">
                      https://tools.google.com/dlpage/gaoptout
                    </a>.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FC4C4C] font-bold shrink-0">—</span>
                  <span>
                    <strong>Platform opt-outs.</strong> The following advertising partners offer opt-out features that let
                    you opt out of use of your information for interest-based advertising:
                    <ul className="mt-2 space-y-1 ml-4">
                      {[
                        { label: 'Google', href: 'https://adssettings.google.com/anonymous?hl=en' },
                        { label: 'Facebook', href: 'https://www.facebook.com/about/ads' },
                        { label: 'LinkedIn', href: 'https://www.linkedin.com/mypreferences/d/categories/ads' },
                        { label: 'Microsoft', href: 'https://account.microsoft.com/privacy/ad-settings/signedout' },
                      ].map(({ label, href }) => (
                        <li key={label} className="flex gap-2">
                          <span className="text-[#FC4C4C] shrink-0">–</span>
                          <a href={href} className="text-[#3B86E1] hover:underline" target="_blank" rel="noopener noreferrer">{label}</a>
                        </li>
                      ))}
                    </ul>
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FC4C4C] font-bold shrink-0">—</span>
                  <span>
                    <strong>Advertising industry opt-out tools.</strong> You can also use these opt-out options to limit
                    use of your information for interest-based advertising by participating companies:
                    <ul className="mt-2 space-y-1 ml-4">
                      {[
                        { label: 'Digital Advertising Alliance', href: 'https://optout.aboutads.info/?c=2&lang=EN' },
                        { label: 'Network Advertising Initiative', href: 'https://optout.networkadvertising.org/?c=1' },
                      ].map(({ label, href }) => (
                        <li key={label} className="flex gap-2">
                          <span className="text-[#FC4C4C] shrink-0">–</span>
                          <a href={href} className="text-[#3B86E1] hover:underline" target="_blank" rel="noopener noreferrer">{label}</a>
                        </li>
                      ))}
                    </ul>
                  </span>
                </li>
              </ul>
              <p className="mb-6">
                Note that because these opt-out mechanisms are specific to the device or browser on which they are
                exercised, you will need to opt out on every browser and device that you use.
              </p>

              <p>
                <strong>Do Not Track.</strong> Some Internet browsers may be configured to send &quot;Do Not Track&quot; signals
                to the online services that you visit. We currently do not respond to &quot;Do Not Track&quot; or similar signals.
                To find out more about &quot;Do Not Track,&quot; please visit{' '}
                <a href="http://www.allaboutdnt.com" className="text-[#3B86E1] hover:underline" target="_blank" rel="noopener noreferrer">
                  http://www.allaboutdnt.com
                </a>.
              </p>
            </section>

            {/* 5. Other Sites and Services */}
            <section>
              <h2 className="text-xl font-bold text-[#141B24] mb-4">Other Sites and Services</h2>
              <p>
                Our Services may contain links to websites and other online services operated by third parties. In
                addition, our content may be integrated into web pages or other online services that are not associated
                with us. These links and integrations are not an endorsement of, or representation that we are affiliated
                with, any third party. We do not control websites or online services operated by third parties, and we
                are not responsible for their actions. This Privacy Policy does not apply to such third-party sites or
                services, and it does not apply to any communications between users outside of our Services.
              </p>
            </section>

            {/* 6. Security */}
            <section>
              <h2 className="text-xl font-bold text-[#141B24] mb-4">Security</h2>
              <p>
                We use reasonable organizational, technical, and administrative measures designed to protect against
                unauthorized access, misuse, loss, disclosure, alteration, and destruction of personal information we
                maintain. Unfortunately, data transmission over the Internet cannot be guaranteed as completely secure.
                Therefore, while we strive to protect your personal information, we cannot guarantee the security of
                personal information.
              </p>
            </section>

            {/* 7. Retention of Personal Information */}
            <section>
              <h2 className="text-xl font-bold text-[#141B24] mb-4">Retention of Personal Information</h2>
              <p className="mb-4">
                Where required under applicable laws, we retain personal information only for as long as is necessary to
                fulfil the purposes for which it was collected and processed, in accordance with our retention policies,
                and in accordance with applicable laws and regulatory obligations.
              </p>
              <p>
                To determine the appropriate retention period for personal information, we consider the amount, nature,
                and sensitivity of the personal information, the potential risk of harm from unauthorized use or
                disclosure of personal information, the purposes for which we use personal information and whether we
                can achieve those purposes through other means, and the applicable legal and regulatory requirements.
              </p>
            </section>

            {/* 8. Children's Privacy */}
            <section>
              <h2 className="text-xl font-bold text-[#141B24] mb-4">Children&apos;s Privacy</h2>
              <p>
                Our Services are not intended for use by children under 18 years of age. Additionally, if we learn that
                we have collected personal information through our Services from a child under 13 without the consent of
                the child&apos;s parent or guardian as required by law, we will delete it.
              </p>
            </section>

            {/* 9. Changes to This Privacy Policy */}
            <section>
              <h2 className="text-xl font-bold text-[#141B24] mb-4">Changes to This Privacy Policy</h2>
              <p>
                We reserve the right to modify this Privacy Policy at any time. Where we do so, we will update the date
                of this Privacy Policy and post it on the Services. If we make material changes to this Privacy Policy,
                we will let you know.
              </p>
            </section>

            {/* 10. How to Contact Us */}
            <section>
              <h2 className="text-xl font-bold text-[#141B24] mb-4">How to Contact Us</h2>
              <p>
                You can reach us by email at{' '}
                <a href="mailto:privacy@hellospacelift.com" className="text-[#3B86E1] hover:underline">
                  privacy@hellospacelift.com
                </a>.
              </p>
            </section>

          </div>
        </div>
      </section>
    </div>
  )
}
