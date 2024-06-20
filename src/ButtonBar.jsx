const ButtonBar = ({ children, icon, isOpen }) => {
  return (
    <div>
      <Button
        className={
          "w-[100%] pl-5 text-2xl font-thin bg-transparent rounded-md text-white"
        }
        StartSvg={isOpen ? <HomeIcon /> : null}
      >
        {isOpen ? "Inicio" : <HomeIcon />}
      </Button>
    </div>
  );
};

export default ButtonBar;
