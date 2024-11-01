// Here's your code.
import * as db from 'db';
import * as http from 'http';

/*
 * The input parameter is defined by `@action.param()`.
 */
export class Input {
    @action.param({ type: 'String', required: true })
    wk_client_id: string

    @action.param({ type: 'String', required: true })
    wk_client_secret: string

    @action.param({ type: 'String', required: true })
    publish_app_id: string
}

/*
 * The output parameter is defined by `@action.param()`.
 */
export class Output {
    @action.param({ type: 'any' })
    result: string
}

export class PublishApp2WeLink {
    @action.method({ input: "Input", output: "Output" })
    run(input: Input): Output {

        return {
            result: JSON.stringify(input)
        }
    }


}