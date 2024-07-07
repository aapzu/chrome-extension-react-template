import { Env } from "../sharedFile";
import { useChromeStorageLocal } from "use-chrome-storage";

type Value = Record<Env, number>;
const initialValue: Value = Object.values(Env).reduce(
  (acc, key) => ({ ...acc, [key]: 0 }),
  {} as Value
);

export const Counter = ({ env }: { env: Env }) => {
  const [value, setValue] = useChromeStorageLocal("count", initialValue);

  const count = value[env];

  const setCount = (count: number) => {
    setValue({
      ...value,
      [env]: count,
    });
  };

  return (
    <div>
      <div>
        {Env.Content} count: {value[Env.Content]}
      </div>
      <div>
        {Env.Popup} count: {value[Env.Popup]}
      </div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
