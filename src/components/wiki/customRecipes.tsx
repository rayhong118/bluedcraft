import { TooltipHost } from "@fluentui/react";

interface RecipeItem {
  name: string;
  imgSrc: string;
}

export interface CustomRecipe {
  input: RecipeItem[] | undefined[];
  output: RecipeItem;
}

const customRecipeData: CustomRecipe[] = [
  { input: [undefined], output: { name: "outputName", imgSrc: "" } },
];
export const CustomRecipes = () => {
  return (
    <>
      <table>
        {customRecipeData.map((customRecipeDatum) => {
          return (
            <tr>
              <td>
                {customRecipeDatum.output.name}
                <img
                  src={customRecipeDatum.output.imgSrc}
                  alt={customRecipeDatum.output.name}
                />
              </td>
              <td>{customRecipeInput(customRecipeDatum.input)}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

const customRecipeInput = (customRecipeInput: RecipeItem[] | undefined[]) => {
  return (
    <td>
      {customRecipeInput.map((item, index) => {
        return (
          <TooltipHost content={item?.name}>
            {item ? <img src={item.imgSrc} alt={item.name} /> : <div />}
          </TooltipHost>
        );
      })}
    </td>
  );
};
