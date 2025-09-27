import { useRouter } from "next/navigation";

export const useCustomRouter = () => {
  const router = useRouter();

  const push = (path: string) => {
    router.push(path);
  };

  return { push };
};
