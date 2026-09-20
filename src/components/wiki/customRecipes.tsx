import Tooltip from "@mui/material/Tooltip";

interface RecipeItem {
  name: string;
  imgSrc: string;
}

export interface CustomRecipe {
  input: (RecipeItem | undefined)[];
  output: RecipeItem;
}

export const CustomRecipes = (customRecipeData: CustomRecipe[]) => {
  return (
    <>
      <table>
        <tbody>
          {customRecipeData.map((customRecipeDatum, idx) => {
            return (
              <tr className="custom-recipe" key={`recipe-${idx}`}>
                <td className="output">
                  {customRecipeDatum.output.name}
                  <img
                    src={customRecipeDatum.output.imgSrc}
                    alt={customRecipeDatum.output.name}
                  />
                </td>
                {customRecipeInput(customRecipeDatum.input)}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

const customRecipeInput = (customRecipeInput: (RecipeItem | undefined)[]) => {
  return (
    <td className="input">
      {customRecipeInput.map((item, index) => {
        return (
          <Tooltip key={index} title={item?.name || ""} arrow>
            <span>
              {item ? <img src={item.imgSrc} alt={item.name} /> : <span />}
            </span>
          </Tooltip>
        );
      })}
    </td>
  );
};

