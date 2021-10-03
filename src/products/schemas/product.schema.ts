import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({ unique: true })
  name: string;

  @Prop()
  category: string;

  @Prop()
  sku: string;

  @Prop()
  price: number;

  @Prop()
  quantity: number;

  @Prop()
  created_at?: number;

  @Prop()
  updated_at?: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

