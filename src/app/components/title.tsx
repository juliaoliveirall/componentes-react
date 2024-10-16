interface TitleText {
    text: string;
  }
  
  export function Title({ text }: TitleText) {
    return (
      <div className="title-container">
        <h1>{text}</h1>
      </div>
    );
  }