export type Reservation = {
    id: string,
    userIdClient: number,
    userIdPro: number,
    start: string,
    end: string,
    idPets: string[],
    status: string,
    refuseReasons?: string

}