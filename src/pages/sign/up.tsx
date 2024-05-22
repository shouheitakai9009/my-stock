import { SignLayout } from "@/components/layouts/SignLayout";
import { NextPageWithLayout } from "../_app";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const FormItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <section className="grid w-full items-center gap-1.5">{children}</section>
);

const SignUp: NextPageWithLayout = () => {
  return (
    <div>
      <h1 className="text-3xl">サインアップ</h1>
      <div className="grid gap-6 py-4">
        <FormItem>
          <Label htmlFor="nickname">ニックネーム</Label>
          <Input
            type="text"
            id="nickname"
            placeholder="あなたのよく呼ばれる名前を入力"
          />
        </FormItem>
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
        <Button type="submit" size="lg">
          仮登録する
        </Button>
      </div>
    </div>
  );
};

SignUp.getLayout = SignLayout;

export default SignUp;
