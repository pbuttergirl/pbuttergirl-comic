export type ComicImageProps = {
  imagePath: string;
};

export const ComicImage = (props: ComicImageProps) => {
  const { imagePath } = props;
  return (
    <div className={'max-w-max md:w-1/2'} data-testid="comic-image">
      <img
        src={imagePath}
        alt={
          'The main character of the series is young girl who is in love with peanut butter'
        }
      />
    </div>
  );
};
