import { motion } from 'framer-motion'

const GlassCard = ({ children, className = '', hoverEffect = true }) => {
    return (
        <motion.div
            className={`glass-card rounded-xl p-6 ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={hoverEffect ? { y: -5, scale: 1.02 } : {}}
            transition={{ duration: 0.4 }}
        >
            {children}
        </motion.div>
    )
}

export default GlassCard
