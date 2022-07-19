import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import Courier from "./Courier";
import Recipient from "./Recipient";

@Entity("orders")
class Order {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    recipient_id: string;

    @ManyToOne(() => Recipient)
    @JoinColumn({ name: "recipient_id" })
    recipient: Recipient;

    @Column()
    courier_id: string;

    @ManyToOne(() => Courier)
    @JoinColumn({ name: "courier_id" })
    courier: Courier;

    @Column()
    signature_id: string;

    @Column()
    product: string;

    @CreateDateColumn()
    canceled_at: Date;

    @CreateDateColumn()
    start_date: Date;

    @CreateDateColumn()
    end_date: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    update_at: Date;
}

export default Order;
