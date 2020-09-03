const Query = {
    async items(parent, args, context, info) {
        const items = await context.db.query.items(args);
        return items;
    }
};

module.exports = Query;
