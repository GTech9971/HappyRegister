import { IonCol, IonRow, IonText } from "@ionic/react";

export type ItemLabelProps = {
    label: string;
    amount: number;
}
export const ItemLabel = (prop: ItemLabelProps) => {
    return (
        <IonRow>
            <IonCol size="4">
                <IonText>
                    <p>{prop.label}</p>
                </IonText>
            </IonCol>
            <IonCol>
                <p>x {prop.amount}</p>
            </IonCol>
        </IonRow>

    )
}