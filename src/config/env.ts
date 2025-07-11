import { z } from "zod";

const createEnv = () => {
	const EnvSchema = z.object({
		API_BASE_URL: z.string(),
		LIMIT_PER_CALL: z.string().optional().default("50"),
	});

	const envVars = Object.entries(import.meta.env).reduce<
		Record<string, string>
	>((acc, curr) => {
		const [key, value] = curr;
		if (key.startsWith("VITE_")) {
			acc[key.replace("VITE_", "")] = value;
		}
		return acc;
	}, {});

	const parsedEnv = EnvSchema.safeParse(envVars);

	if (!parsedEnv.success) {
		throw new Error(
			`Invalid env provided.
The following variables are missing or invalid:
${Object.entries(parsedEnv.error.flatten().fieldErrors)
	.map(([k, v]) => `- ${k}: ${v}`)
	.join("\n")}
`
		);
	}

	return parsedEnv.data;
};

export const env = createEnv();
