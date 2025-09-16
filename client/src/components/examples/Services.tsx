import Services from '../Services';

export default function ServicesExample() {
  return (
    <Services onContactClick={() => console.log('Contact clicked from services')} />
  );
}