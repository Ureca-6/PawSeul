import { ApiProperty } from '@nestjs/swagger';

export class AddProductToCartDto {
  @ApiProperty({ description: '추가할 제품 ID' })
  productId: string;

  @ApiProperty({ description: '제품 수량' })
  quantity: number;
}
