export type ComicImageProps = {
  imagePath: string;
};

export const ComicImage = (props: ComicImageProps) => {
  const { imagePath } = props;
  return (
    <div className={'w-1/2'} data-testid="comic-image">
      <img src={imagePath} alt={'Image of comic episode'} />
    </div>
  );
};
