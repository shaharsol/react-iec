export default interface AuthContextInterface {
    jwt: string,
    newLogin(jwt: string): void
    logout(): void
}