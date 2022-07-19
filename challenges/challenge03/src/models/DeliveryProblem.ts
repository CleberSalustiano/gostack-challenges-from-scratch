import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import Order from "./Order";

@Entity("delivery_problems")
class DeliveryProblem {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    delivery_id: string;

    @ManyToOne(() => Order)
    @JoinColumn({ name: "delivery_id" })
    delivery: Order;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    update_at: Date;
}

export default DeliveryProblem;
