export type Pet = {
    id: number,
    userId: number,
    name: string,
    gender: string,
    type: string,
    birth: string,
    adoptionDate: string,
    weight: string,
    vaccines: string,
    isAllergies: boolean,
    allergies?: string
    isMedications: boolean,
    medicationsAndFrequences?: string
    isHealthProblems: boolean,
    healthProblems?: string,
    dateLastVeterinaryConsultation: string,
    description: string,
    photoUrl: string
}
