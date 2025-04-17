interface ScrClassificationBadgeProps {
  classification: 'SAFE' | 'NORMAL' | 'KETER' | 'ARCHIV';
}

const ScrClassificationBadge = ({ classification }: ScrClassificationBadgeProps) => {
  const classMap = {
    'SAFE': 'classification-safe',
    'NORMAL': 'classification-normal', 
    'KETER': 'classification-keter',
    'ARCHIV': 'classification-archiv'
  };

  return (
    <span className={classMap[classification]}>
      {classification}
    </span>
  );
};

export default ScrClassificationBadge;