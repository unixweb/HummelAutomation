import Navigation from '../Navigation';

export default function NavigationExample() {
  return (
    <div className="h-32">
      <Navigation onSectionChange={(section) => console.log(`Navigated to: ${section}`)} />
    </div>
  );
}