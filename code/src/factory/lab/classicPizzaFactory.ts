import { PizzaFactory } from "./pizzFactory";
import { PizzaStyle, PizzaSize, Pizza, PizzaType, BreadType, CheezeType, Ingredient } from "./pizza";

export class ClassicPizzaFactory implements PizzaFactory {
  bakePizza(style: PizzaStyle, size: PizzaSize): Pizza {
    var pizza: Pizza = new Pizza();
    pizza.type = PizzaType.Classic;
    pizza.size = size;
    if (style === PizzaStyle.Italian) {
      pizza.bread = BreadType.Thin;
    } else {
      pizza.bread = BreadType.Thick;
    }
    pizza.cheese = CheezeType.Mozzarella;
    pizza.ingredients = [Ingredient.Tomato, Ingredient.Basil];
    return pizza;
  }
}
