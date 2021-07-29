const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoose_delete = require('mongoose-delete');

const Course = new Schema(
    {
        name: { type: 'string' },
        description: { type: 'string' },
        image: { type: 'string' },
        videoId: { type: 'string' },
        slug: { type: 'string' },
    },
    {
        timestamps: true,
    },
);

Course.plugin(mongoose_delete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Course', Course);
