const Title: React.FC<{children: string, as: string}> = ({children, as}) => {
    return (
      <>
        <h1>{children}</h1>
        <style jsx>
          {`
          h1 {
            color: red;
          }
          `}
        </style>
      </>
    );
  };

  export default Title