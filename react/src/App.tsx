import YeForm from "@/components/YeForm.tsx";
import { Email, example } from "@yoe-form/shared";

function App() {
  const handleEmail = async (
    _values: Record<string, unknown>,
    _internalEmail: Email,
    confirmationEmail?: Email,
  ) => {
    alert(confirmationEmail);
  };

  const handleRestCall = async (
    url: string,
    values: Record<string, unknown>,
  ) => {
    alert(JSON.stringify({ url, ...values }));
  };

  return (
    <div className="flex h-full w-full justify-center">
      <div className="flex w-1/2 flex-col items-center justify-center">
        <h1 className="text-5xl">React</h1>
        <YeForm
          config={example}
          emailHandler={handleEmail}
          restHandler={handleRestCall}
          language={"de"}
          className="ye-date:text-sm"
        />
      </div>
    </div>
  );
}

export default App;
