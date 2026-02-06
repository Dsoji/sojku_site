import { motion } from 'motion/react'

const Privacy = () => {
    return (
        <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-dark-100">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-accent to-cyber bg-clip-text text-transparent">
                    Privacy Policy
                </h1>

                <div className="space-y-8 prose prose-invert prose-lg max-w-none">
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
                        <p>
                            We collect information you provide directly to us, such as when you request a quote, sign up for our newsletter, or contact us for support. This may include your name, email address, and company details.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
                        <p>
                            We use the collected information to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Provide, maintain, and improve our services.</li>
                            <li>Communicate with you about projects and updates.</li>
                            <li>Respond to your comments and questions.</li>
                            <li>Monitor and analyze trends and usage.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. Data Security</h2>
                        <p>
                            We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, or destruction. However, no data transmission over the internet is 100% secure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Sharing of Information</h2>
                        <p>
                            We do not sell or share your personal information with third parties for their marketing purposes. We may share information with service providers who perform services on our behalf.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Your Choices</h2>
                        <p>
                            You may opt out of receiving promotional emails from us by following the instructions in those emails. You can also request to update or delete your personal information by contacting us.
                        </p>
                    </section>

                    <section>
                        <p className="text-sm opacity-60 mt-12">
                            Last Updated: February 6, 2026
                        </p>
                    </section>
                </div>
            </motion.div>
        </div>
    )
}

export default Privacy
