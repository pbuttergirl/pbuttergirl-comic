export type TextComponentProps = {
  title: string;
};

export const Text = (props: TextComponentProps) => {
  const { title } = props;
  return (
    <div role="heading" className={"text-6xl"}>
      {title}
    </div>
  );
};
