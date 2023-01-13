import { Outlet } from 'react-router-dom';

const RootLayout: React.FC = () => {
  return (
    <main className="bg-black text-gray-300">
      <Outlet />
    </main>
  );
};

export default RootLayout;
