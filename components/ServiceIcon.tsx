interface ServiceIconProps {
  name: string;
  className?: string;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({ name, className }) => {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={name} />
    </svg>
  );
};

export default ServiceIcon;
