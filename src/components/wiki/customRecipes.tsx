import { TooltipHost } from "@fluentui/react";

interface RecipeItem {
  name: string;
  imgSrc: string;
}

export interface CustomRecipe {
  input: RecipeItem[] | undefined[];
  output: RecipeItem;
}

// const customRecipeData: CustomRecipe[] = [
//   {
//     input: [
//       undefined,
//       undefined,
//       undefined,
//       undefined,
//       undefined,
//       undefined,
//       undefined,
//       undefined,
//       undefined,
//     ],
//     output: { name: "outputName", imgSrc: "" },
//   },
// ];

export const CustomRecipes = (customRecipeData: CustomRecipe[]) => {
  return (
    <>
      <table>
        {customRecipeData.map((customRecipeDatum) => {
          return (
            <tr className="custom-recipe">
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
      </table>
    </>
  );
};

const customRecipeInput = (customRecipeInput: RecipeItem[] | undefined[]) => {
  return (
    <td className="input">
      {customRecipeInput.map((item, index) => {
        return (
          <TooltipHost content={item?.name}>
            {item ? <img src={item.imgSrc} alt={item.name} /> : <span />}
          </TooltipHost>
        );
      })}
    </td>
  );
};
