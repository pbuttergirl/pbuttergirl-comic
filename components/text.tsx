export type TextComponentProps = {
  title: string;
};

export const Text = (props: TextComponentProps) => {
  const { title } = props;
  return (
    <div role="heading" aria-level={1} className={'text-sm sm:text-2xl'}>
      {title}
    </div>
  );
};
