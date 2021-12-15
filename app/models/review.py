from .db import db
from sqlalchemy import DateTime
from sqlalchemy.sql.functions import now

class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    listingId = db.Column(db.Integer, db.ForeignKey('listings.id'), nullable=False)
    content = db.Column(db.Text, nullable=False)
    stars = db.Column(db.Integer, nullable=False)
    created_at = db.Column(DateTime(timezone=True), server_default=now())
    updated_at = db.Column(DateTime(timezone=True), onupdate=now())

    user = db.relationship('User', back_populates='reviews', cascade="all, delete")
    listing = db.relationship('Listing', back_populates='reviews', cascade="all, delete")

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'listingId': self.listingId,
            'content': self.content,
            "stars": self.stars,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "user": self.user.to_dict()
        }
