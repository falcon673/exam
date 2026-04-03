import { Product } from './Product';
export class ConcreteProductA implements Product {
    public operation(): string { return '{Result of ConcreteProductA}'; }
}
export class ConcreteProductB implements Product {
    public operation(): string { return '{Result of ConcreteProductB}'; }
}