import { SignLayout } from "@/components/layouts/SignLayout";
import { NextPageWithLayout } from "../_app";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const FormItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <section className="grid w-full items-center gap-1.5">{children}</section>
);

const SignIn: NextPageWithLayout = () => {
  const { toast } = useToast();
  const onSignIn = (): void => {
    toast({
      title: "サインインに成功しました！",
      description: "おかえりなさい、{ニックネーム}さん。今日も勝ちましょうね。",
      variant: "success",
    });
  };

  return (
    <div>
      <h1 className="text-3xl">サインイン</h1>
      <div className="grid gap-6 py-4">
        <FormItem>
          <Label htmlFor="email">メールアドレス</Label>
          <Input type="email" id="email" placeholder="メールアドレスを入力" />
        </FormItem>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="password">パスワード</Label>
          <Input type="password" id="password" placeholder="パスワードを入力" />
        </div>
      </div>
      <div className="flex justify-end">
        <Button type="button" size="lg" onClick={onSignIn}>
          ログイン
        </Button>
      </div>
    </div>
  );
};

SignIn.getLayout = SignLayout;

export default SignIn;
