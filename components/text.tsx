export type TextComponentProps = {
  title: string;
};

export const Text = (props: TextComponentProps) => {
  const { title } = props;
  return (
    <div role="heading" className={'text-sm sm:text-2xl'}>
      {title}
    </div>
  );
};
