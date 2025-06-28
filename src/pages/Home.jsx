import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';

const Home = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Task Manager App</h1>
        <p className="text-lg text-gray-700">
          A simple app to manage tasks and fetch advice from an API.
        </p>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card title= "Task Manager" description="Add, complete, and delete tasks with state management and local storage." />
          <Card title="API Page" description="Fetch fun advice using the Advice Slip API with loading and error handling." />
        </div>

      {/* Call To Action */}
      <section className="text-center space-x-4">
        <Link to="/tasks">
        <Button variant="primary">Try Task Manager</Button>
        </Link>
        <Link to="/api">
        <Button variant="secondary">Get Advice</Button>
        </Link>
    </section>
    </section>
    </div>
  );
};

export default Home;
