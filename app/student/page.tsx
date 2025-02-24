import ClientOnly from '../components/client/ClientOnly';
import { StudentPageContent } from '../components/student/StudentPageContent';

export default function StudentPage() {
  return (
    <ClientOnly>
      <StudentPageContent />
    </ClientOnly>
  );
} 