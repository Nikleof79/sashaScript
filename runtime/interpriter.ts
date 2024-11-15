import { ValueType, RuntimeValue, NumberVal, NullVal } from './values.ts';
import { NodeType , NumericLiteral, Stmt } from '../frontend/ast.ts';

export function evaluate(astNode:Stmt):RuntimeValue {
    switch (astNode.kind) {
        case "NumericLiteral":
            return { value: ((astNode as NumericLiteral).value) , type: "number" } as NumberVal
        default:
            return { value:"null", type:"null" } as NullVal
            break;
    }
}