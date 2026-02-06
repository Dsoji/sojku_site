import { motion } from 'motion/react'

const Terms = () => {
    return (
        <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-dark-100">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-accent to-cyber bg-clip-text text-transparent">
                    Terms and Conditions
                </h1>

                <div className="space-y-8 prose prose-invert prose-lg max-w-none">
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
                        <p>
                            Welcome to Sojku. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. Services</h2>
                        <p>
                            Sojku provides software development, UI/UX design, and digital strategy services. The specific scope of work for any project will be outlined in a separate agreement or statement of work.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. Intellectual Property</h2>
                        <p>
                            Unless otherwise agreed in writing, all intellectual property rights for custom software developed by Sojku will be transferred to the client upon full payment. Sojku retains the rights to any pre-existing code, tools, or libraries used in the development process.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Confidentiality</h2>
                        <p>
                            Both parties agree to maintain the confidentiality of all proprietary information shared during the course of the business relationship.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Limitation of Liability</h2>
                        <p>
                            Sojku shall not be liable for any indirect, incidental, or consequential damages arising out of the use of our services or products.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">6. Governing Law</h2>
                        <p>
                            These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Sojku operates.
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

export default Terms
