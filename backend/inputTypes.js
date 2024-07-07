const zod = require ("zod");


const create = zod.object({
    title: zod.string(),
    description: zod.string()
});

const update = zod.object({
    id: zod.string()
});

module.exports = {
    create: create,
    update: update
};
