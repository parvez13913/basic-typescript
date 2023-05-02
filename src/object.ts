const mellUser: {
  company: "BD Jobs";
  //   company: "BD Jobs";=>its call  Literal Types,{কোন একটা নির্দিষ্ট ভ্যালু ব্যাবহার করার জন্য  Literal Types বযাবহার করা হয়।}
  name: string;
  age: number;
  boyFriend: boolean;
  job?: string;
  //   job?: string;=> its call  Optional types{job property অপশনাল,ভ্যালুতে দিলেও হবে না দিলেও হবে।}
} = {
  name: "Natasha",
  age: 22,
  boyFriend: false,
  job: "actor",
  company: "BD Jobs",
  //   company: "BD Jobs",
  //   job: "actor",
};
