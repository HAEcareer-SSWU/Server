import { Column, Entity, Index, OneToMany } from "typeorm";
import { Tag } from "./Tag";
import { UserTag } from "./UserTag";

@Index("value", ["value"], { unique: true })
@Entity("tag_color", { schema: "haecareer" })
export class TagColor {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("char", { name: "value", unique: true, length: 7 })
  value: string;

  @OneToMany(() => Tag, (tag) => tag.tagColor)
  tags: Tag[];

  @OneToMany(() => UserTag, (userTag) => userTag.tagColor)
  userTags: UserTag[];
}
