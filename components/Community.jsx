const members = [
  {
    id: 1,
    username: "RY",
    firstName: "Rahul",
    lastName: "Yadav",
    age: 28,
    image: "https://images.pexels.com/photos/5327536/pexels-photo-5327536.jpeg",
    feedback:
      "Best gym I've ever trained at. The equipment is excellent, the coaches actually care, and the atmosphere keeps me coming back.",
  },
  {
    id: 2,
    username: "AJ",
    firstName: "Ajay",
    lastName: "Joshi",
    age: 32,
    image: "https://images.pexels.com/photos/32951773/pexels-photo-32951773.jpeg",
    feedback:
      "I've made more progress here in six months than I did in two years at my old gym. Great people, great energy, and no distractions.",
  },
  {
    id: 3,
    username: "AS",
    firstName: "Ananya",
    lastName: "Sharma",
    age: 26,
    image: "https://media.istockphoto.com/id/2151051503/photo/sporty-young-fit-indian-adult-girl-do-cardio-exercise-cycling-at-gym-sport-woman-workout.jpg?s=612x612&w=0&k=20&c=xfGeYpSQO4DKjhvv-QqQ5ZoR87I0qxmI2OiKur0q7c0=",
    feedback:
      "Clean facility, quality equipment, and a really supportive community. It feels like everyone here is serious about getting better.",
  },
];
 function Community() {
  return (
    <section
      id="Community"
      className="mx-auto max-w-6xl px-6 py-24 border-b border-iron-line"
    >
      <div>
        <div className="mb-14">
          <span className="font-mono text-[12px] uppercase tracking-widest text-iron-steel">
            Member Feedback
          </span>

          <h2 className="font-display text-5xl md:text-6xl text-iron-paper mt-3">
            WHAT THEY SAY.
          </h2>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-1 p-1 bg-iron-line border border-iron-line">
        {members.map((c) => (
          <div key={c.id}>
            <div className="bg-iron-bg p-8 h-full hover:bg-iron-surface transition-colors">
              <img src={c.image} alt={c.name} />

              <h3 className="font-display text-2xl tracking-wide text-iron-paper text-center p-2">
                {c.firstName} {c.lastName}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-iron-steel">
                "{c.feedback}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Community;
