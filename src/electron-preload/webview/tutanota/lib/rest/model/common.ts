// tslint:disable-next-line:variable-name
export const GroupType: Record<string, "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8"> = {
    User: "0",
    Admin: "1",
    Team: "2",
    Customer: "3",
    External: "4",
    Mail: "5",
    Contact: "6",
    File: "7",
    LocalAdmin: "8",
};

// tslint:disable-next-line:variable-name
export const MailFolderType: Record<string, "0" | "1" | "2" | "3" | "4" | "5" | "6"> = {
    CUSTOM: "0",
    INBOX: "1",
    SENT: "2",
    TRASH: "3",
    ARCHIVE: "4",
    SPAM: "5",
    DRAFT: "6",
};

// tslint:disable-next-line:variable-name
export const OperationType: Record<string, "0" | "1" | "2"> = {
    CREATE: "0",
    UPDATE: "1",
    DELETE: "2",
};

export interface BaseEntity {
    _id: Id | IdTuple;
}

export type NumberString = string;

export type Id<T extends BaseEntity = BaseEntity> = string;

export type IdTuple<ID1 extends BaseEntity = BaseEntity, ID2 extends BaseEntity = BaseEntity> = [Id<ID1>, Id<ID2>];

export type TypeRefApp = "tutanota" | "sys";

export interface TypeRef<T extends BaseEntity> {
    _type: T;
    app: TypeRefApp;
    type: string;
}

export interface RequestParams {
    ids?: Id[];
    start?: string;
    count?: number;
    reverse?: boolean;
}
