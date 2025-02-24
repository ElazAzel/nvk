// Создаем переиспользуемую кнопку с анимациями
export const Button = ({ 
  children, 
  variant = 'primary',
  size = 'md',
  ...props 
}: ButtonProps) => {
  return (
    <motion.button
      className={`
        relative group overflow-hidden rounded-lg font-medium
        inline-flex items-center justify-center
        ${getVariantStyles(variant)}
        ${getSizeStyles(size)}
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.5 }}
      />
      <span className="relative z-10 flex items-center space-x-2">
        {children}
      </span>
    </motion.button>
  );
}; 