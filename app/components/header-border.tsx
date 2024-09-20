const Border: React.FC = () => {
  return (
    <div className="w-full absolute bottom-0 flex justify-center">
      <div
        className="h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        style={{ width: "50%" }}
      />
    </div>
  );
};

export default Border;
