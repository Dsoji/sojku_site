import { motion } from 'motion/react'

const Refund = () => {
    return (
        <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-dark-100">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-accent to-cyber bg-clip-text text-transparent">
                    Refund Policy
                </h1>

                <div className="space-y-8 prose prose-invert prose-lg max-w-none">
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Project Cancellation</h2>
                        <p>
                            Clients may cancel a project at any time. However, any work completed up to the point of cancellation will be billed at our standard hourly rates or as defined in the project agreement.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. Non-Refundable Items</h2>
                        <p>
                            Certain costs, such as initial discovery fees, platform subscriptions, and third-party costs, are non-refundable once they have been incurred.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. Dispute Resolution</h2>
                        <p>
                            If you are dissatisfied with our services, please contact us within 14 days of delivery. We will work with you to resolve any issues and may offer a partial refund or credit toward future work at our discretion.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Finality of Completed Work</h2>
                        <p>
                            Once a project has been completed, delivered, and accepted by the client, no refunds will be issued for the services rendered.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Contact Us</h2>
                        <p>
                            If you have any questions about our refund policy, please reach out to our support team at <span className="text-cyber">hello@sojku.com</span>.
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

export default Refund
